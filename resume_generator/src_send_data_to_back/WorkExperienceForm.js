import React, { useState } from 'react';

const WorkExperienceForm = ({ index, experience, handleExperienceChange, handleRemoveExperience }) => {
  return (
    <div className="work-experience-form">
      <div>
        <label>
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={experience.positionTitle}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={experience.companyName}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={experience.city}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={experience.state}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={(e) => handleExperienceChange(index, e)}
            required
            disabled={experience.currentlyEmployed}
          />
        </label>
        <label>
          Currently Employed:
          <input
            type="checkbox"
            name="currentlyEmployed"
            checked={experience.currentlyEmployed}
            onChange={(e) => handleExperienceChange(index, e)}
          />
        </label>
      </div>
      <div>
        <label>
          Work Summary:
          <textarea
            name="workSummary"
            value={experience.workSummary}
            onChange={(e) => handleExperienceChange(index, e)}
            required
          />
        </label>
      </div>
      <button type="button" onClick={() => handleRemoveExperience(index)}>Remove Experience</button>
      <hr />
    </div>
  );
};

export default WorkExperienceForm;
