import React, { useRef, useEffect, useState } from 'react';
import { ComputeEngine } from 'https://unpkg.com/@cortex-js/compute-engine?module';

export default function Mathfield() {
  const mfRef = useRef(null);
  const latexRef = useRef(null);
  const [formula, setFormula] = useState("\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}");
  const [variableTypes, setVariableTypes] = useState([]);
  const [variableValues, setVariableValues] = useState([]);
  const [isBuildActive, setIsBuildActive] = useState(false);
  const [isFormulaBuilt, setIsFormulaBuilt] = useState(false);
  const [isTestActive, setIsTestActive] = useState(false);

  useEffect(() => {
    const mf = mfRef.current;
    const latex = latexRef.current;

    mf.addEventListener('input', (ev) => {
      const updatedFormula = ev.target.value;
      setFormula(updatedFormula);
      setVariableTypes([]);
      setIsFormulaBuilt(false);
      latex.value = updatedFormula;
      updateBuildButtonStatus();
    });

    latex.addEventListener('input', (ev) => {
      const updatedFormula = ev.target.value;
      setFormula(updatedFormula);
      setVariableTypes([]);
      setIsFormulaBuilt(false);
      mf.setValue(updatedFormula, { suppressChangeNotifications: true });
      updateBuildButtonStatus();
    });

    latex.value = formula;
    updateBuildButtonStatus();
  }, [formula]);

  const parseVariables = (formula) => {
    const excludePattern = /[^=]+=|\\[a-zA-Z]+\s*/g;
    const cleanedFormula = formula.replace(excludePattern, '');
    const variableRegex = /[a-zA-Z]/g;
    const variables = cleanedFormula.match(variableRegex);
    if (variables) {
      const uniqueVariables = [...new Set(variables)];
      const sortedVariables = uniqueVariables.sort();
      return sortedVariables;
    } else {
      return [];
    }
  };

  const getFormattedFormula = () => {
    const variables = parseVariables(formula);
    const variablesString = variables.join(',');
    return `f(${variablesString}) = `;
  };

  const renderVariables = () => {
    const variables = parseVariables(formula);
    return variables.map((variable) => (
      <div id="input" key={variable}>
        <label id="var" htmlFor={variable}>{variable} :</label>
        <select id="varselect" value={variableTypes[variable] || ''} onChange={(e) => handleVariableTypeChange(variable, e.target.value)}>
          <option value="">Select</option>
          <option value="Constant">Constant</option>
          <option value="Universal Constant">Universal Constant</option>
          <option value="Range">Range</option>
        </select>
      </div>
    ));
  };

  const handleVariableTypeChange = (variable, value) => {
    setVariableTypes((prevValues) => ({ ...prevValues, [variable]: value }));
    setIsFormulaBuilt(false);
    setVariableValues([]);
  };

  useEffect(() => {
    updateBuildButtonStatus();
  }, [variableTypes]);

  const updateBuildButtonStatus = () => {
    const variables = parseVariables(formula);
    const allVariablesFilled = variables.every(variable => variableTypes[variable] !== undefined && variableTypes[variable] !== '');
    setIsBuildActive(allVariablesFilled);
    if (!allVariablesFilled) {
      setIsFormulaBuilt(false);
      setVariableValues([]);
    }
  };

  const handleBuild = () => {
    setIsFormulaBuilt(true);
  };

  const renderBuiltFormula = () => {
    if (!isFormulaBuilt) {
      return null;
    }
    const constantVariables = [];
    const rangeVariables = [];
    for (const variable in variableTypes) {
      if(variableTypes[variable] === 'Constant' || variableTypes[variable] === 'Universal Constant'){
        constantVariables.push(variable);
      }
      else if(variableTypes[variable] === 'Range'){
        rangeVariables.push(variable);
      }
    }

    return (
      <div>
        <h6>Your Formula:</h6>
        <div id='field'>
            <div id='function'>{getFormattedFormula()}</div>
            <math-field id="formula" readonly>
                {formula}
            </math-field>
        </div>
        {constantVariables.map((variable) => (
          <div id='input' key={variable}>
            <label id="var" htmlFor={variable}>{variable} :</label>
            <input id='varinput' type="number" placeholder={`Enter value of ${variable}`} value={variableValues[variable] || ''} onChange={(e) => handleVariableValueChange(variable, e.target.value)}/>
          </div>
        ))}
        {rangeVariables.map((variable) => (
          <div id='input' key={variable}>
            <label id="var" htmlFor={variable}>{variable} :</label>
            <div>
              <input id='varinput' type="number" placeholder={`Minimum value of ${variable}`} value={variableValues[`${variable}_min`] || ''} onChange={(e) => handleVariableValueChange(`${variable}_min`, e.target.value)}/> to <input id='varinput' type="number" placeholder={`Maximum value of ${variable}`} value={variableValues[`${variable}_max`] || ''} onChange={(e) => handleVariableValueChange(`${variable}_max`, e.target.value)}/> at an increment of <input id='varinput' placeholder={`Increment in ${variable}`} type="number" value={variableValues[`${variable}_inc`] || ''} onChange={(e) => handleVariableValueChange(`${variable}_inc`, e.target.value)}/>
            </div>
          </div>
        ))}
        <button id='button' style={{backgroundColor:isTestActive?'rgba(0,200,255)':'rgb(200, 200, 200)',cursor:isTestActive?'pointer':'not-allowed',}} disabled={!isTestActive} onClick={handleTest}>Test Formula</button>
      </div>
    );
  };

  const handleVariableValueChange = (variable, value) => {
    setVariableValues((prevValues) => ({ ...prevValues, [variable]: value }));
  };

  useEffect(() => {
    updateTestButtonStatus();
  }, [variableValues]);

  const updateTestButtonStatus = () => {
    const isEmpty = Object.values(variableValues).some(value => value === '' || value === undefined);
    setIsTestActive(!isEmpty);
  };

  const handleTest = () => {

  }

  return (
    <div className="math-field">
        <h6 htmlFor="formula">Formula:</h6>
        <div id='field'>
            <div id='function'>{getFormattedFormula()}</div>
            <math-field id="formula" ref={mfRef}>
                {formula}
            </math-field>
        </div>
        <h6 htmlFor="latex">LaTeX Code:</h6>
        <div id='field'>
            <div id='function'>{getFormattedFormula()}</div>
            <input id="latex" className="output" ref={latexRef}/>
        </div>
        <h6>Variables:</h6>
        {renderVariables()}
        <button id='button' style={{backgroundColor:isBuildActive?'rgba(0,200,255)':'rgb(200, 200, 200)',cursor:isBuildActive?'pointer':'not-allowed',}} disabled={!isBuildActive} onClick={handleBuild}>Build Formula</button>
        {renderBuiltFormula()}
    </div>
  );
}