import React from "react";

export default function LaneFilter() {
  return (
    <nav className="panel">
      <p className="panel-heading">Lanes</p>
      <div className="panel-block">
        <p className="control">
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" /> Top
            </label>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" /> Jungle
            </label>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" /> Mid
            </label>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" /> ADC
            </label>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" /> Support
            </label>
          </div>
          <div className="field">
            <label className="checkbox">
              <input type="checkbox" /> All Roles
            </label>
          </div>
        </p>
      </div>
    </nav>
  );
}
