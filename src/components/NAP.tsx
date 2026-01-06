// NAP.tsx — Name, address, and phone block for trust-building.

import { siteConfig, type SiteConfig } from "@/config/site";

const NAP = () => {
  const address = siteConfig.address;

  const isServiceAreaOnly = "serviceAreaOnly" in address && address.serviceAreaOnly;
  type PhysicalAddress = Exclude<SiteConfig["address"], { serviceAreaOnly: true }>;
  const physicalAddress: PhysicalAddress | null = !isServiceAreaOnly ? (address as PhysicalAddress) : null;

  return (
    <div className="space-y-4 text-sm text-slate-600">
      <div>
        <p className="font-semibold text-slate-900">{siteConfig.businessName}</p>
        {isServiceAreaOnly || !physicalAddress ? (
          <p>Serving the {siteConfig.serviceAreaCities.join(", ")} area.</p>
        ) : (
          <p>
            {physicalAddress.line1}
            {physicalAddress.line2 ? `, ${physicalAddress.line2}` : ""}
            <br />
            {physicalAddress.city}, {physicalAddress.state} {physicalAddress.zip}
          </p>
        )}
      </div>
      <div>
        <p className="font-semibold text-slate-900">Studio Hours</p>
        <ul className="space-y-1">
          {siteConfig.hours.map((hour) => (
            <li key={hour.day} className="flex justify-between">
              <span>{hour.day}</span>
              <span>
                {hour.closed ? "Closed" : `${hour.open} – ${hour.close}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NAP;
