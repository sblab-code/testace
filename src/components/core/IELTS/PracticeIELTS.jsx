import React from 'react';
import { Link } from 'react-router-dom';

const PracticeIELTS = () => {
  return (
    <div>
      <h1>Practice IELTS</h1>
      <div>
        <h2>Full IELTS Test</h2>
        <p>Take a complete IELTS test including all four modules.</p>
        <Link to="/practice-ielts/full-test">Start Full Test</Link>
      </div>
      <div>
        <h2>Module Tests</h2>
        <p>Practice individual IELTS modules.</p>
        <ul>
          <li><Link to="/practice-ielts/module/writing">Writing Test</Link></li>
          <li><Link to="/practice-ielts/module-test/reading">Reading Test</Link></li>
          <li><Link to="/practice-ielts/module-test/listening">Listening Test</Link></li>
          <li><Link to="/practice-ielts/module-test/speaking">Speaking Test</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeIELTS;