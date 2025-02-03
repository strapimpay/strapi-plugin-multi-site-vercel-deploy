import React from "react";
import { Select, Option } from "@strapi/design-system/Select";

const SitePicker = ({ sites, selectedSite, setSelectedSite }) => {
  const handleChange = (value) => {
    if (value === selectedSite.displayName) return;

    const changedSite = sites.find((site) => site.displayName === value);
    setSelectedSite(changedSite);
  };

  return (
    <Select size="M" value={selectedSite.displayName} onChange={handleChange}>
      {sites.map((site) => (
        <Option key={site.displayName} value={site.displayName}>
          {site.displayName}
        </Option>
      ))}
    </Select>
  );
};

export default SitePicker;
