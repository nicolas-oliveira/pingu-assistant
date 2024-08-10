import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Orbs.css';

function Hello() {
  return (
    <>
      <div className="container palette-1">
        <div className="blobs">
          <svg viewBox="0 0 1200 1200">
            <g className="blob blob-1">
              <path />
            </g>
            <g className="blob blob-2">
              <path />
            </g>
            <g className="blob blob-3">
              <path />
            </g>
            <g className="blob blob-4">
              <path />
            </g>
            <g className="blob blob-1 alt">
              <path />
            </g>
            <g className="blob blob-2 alt">
              <path />
            </g>
            <g className="blob blob-3 alt">
              <path />
            </g>
            <g className="blob blob-4 alt">
              <path />
            </g>
          </svg>
        </div>
      </div>
      <div className="switcher">
        <div className="switch-button palette-1" data-palette="1" />
        <div className="switch-button palette-2" data-palette="2" />
        <div className="switch-button palette-3" data-palette="3" />
        <div className="switch-button palette-4" data-palette="4" />
        <div className="switch-button palette-5" data-palette="5" />
        <div className="switch-button palette-6" data-palette="6" />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
