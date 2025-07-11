import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function ComplianceAdmin() {
  const [requirements, setRequirements] = useState([
    {
      requirementName: "",
      formName: "",
      routing: ["", "", ""]
    }
  ]);

  const handleRequirementChange = (index, field, value) => {
    const updated = [...requirements];
    updated[index][field] = value;
    setRequirements(updated);
  };

  const handleRoutingChange = (index, level, value) => {
    const updated = [...requirements];
    updated[index].routing[level] = value;
    setRequirements(updated);
  };

  const addRequirement = () => {
    setRequirements([
      ...requirements,
      {
        requirementName: "",
        formName: "",
        routing: ["", "", ""]
      }
    ]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Compliance Routing Setup</h1>
      {requirements.map((req, index) => (
        <Card key={index} className="mb-6">
          <CardContent className="space-y-4 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Requirement Name</Label>
                <Input
                  placeholder="e.g. GDPR Disclosure"
                  value={req.requirementName}
                  onChange={(e) => handleRequirementChange(index, "requirementName", e.target.value)}
                />
              </div>
              <div>
                <Label>Form to Use</Label>
                <Input
                  placeholder="e.g. gdpr_form_v2.pdf"
                  value={req.formName}
                  onChange={(e) => handleRequirementChange(index, "formName", e.target.value)}
                />
              </div>
              {[0, 1, 2].map((lvl) => (
                <div key={lvl} className="col-span-1">
                  <Label>Route Level {lvl + 1}</Label>
                  <Input
                    placeholder={`Approver for Level ${lvl + 1}`}
                    value={req.routing[lvl]}
                    onChange={(e) => handleRoutingChange(index, lvl, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="mr-4" onClick={addRequirement}>Add Another Requirement</Button>
      <Button variant="default">Save Compliance Setup</Button>
    </div>
  );
}
