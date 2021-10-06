import { useState } from "react";
import "./Results.css";

const Results = (props) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState();
  const [results, setResults] = useState([]);

  return (
    <div className="grid-container">
      <ul className="results-list">
        <li className="item">#groups</li>
        <li className="item">#talks</li>
        <li className="item">#financebelike</li>
        <li className="item">#AventadorSVJ</li>
        <li className="item">#thespeedofsound</li>
        <li className="item">#readyornot</li>
      </ul>
    </div>
  );
};

export default Results;
