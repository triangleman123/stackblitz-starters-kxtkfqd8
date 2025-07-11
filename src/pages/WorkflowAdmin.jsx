import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectItem } from "../components/ui/select";
import { Label } from "../components/ui/label";

const MAX_LEVELS = 4;

export default function WorkflowAdmin() {
  const [workflow, setWorkflow] = useState(Array(MAX_LEVELS).fill(null).map((_, i) => ({
    level: i + 1,
    approverType: "",
    approver: "",
    sla: "",
    escalateTo: ""
  })));

  const handleChange = (index, field, value) => {
    const newWorkflow = [...workflow];
    newWorkflow[index][field] = value;
    setWorkflow(newWorkflow);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Document Routing Workflow Setup</h1>
      {workflow.map((step, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="space-y-4 p-4">
            <h2 className="font-semibold">Approval Level {step.level}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Approver Type</Label>
                <Select value={step.approverType} onChange={e => handleChange(index, 'approverType', e.target.value)}>
                  <SelectItem value="Role">Role</SelectItem>
                  <SelectItem value="User">User</SelectItem>
                </Select>
              </div>
              <div>
                <Label>{step.approverType || "Approver"}</Label>
                <Input
                  placeholder={step.approverType === "User" ? "Enter username" : "Enter role name"}
                  value={step.approver}
                  onChange={e => handleChange(index, 'approver', e.target.value)}
                />
              </div>
              <div>
                <Label>SLA (in hours)</Label>
                <Input
                  type="number"
                  value={step.sla}
                  onChange={e => handleChange(index, 'sla', e.target.value)}
                />
              </div>
              <div>
                <Label>Escalate To</Label>
                <Input
                  placeholder="Fallback role or user"
                  value={step.escalateTo}
                  onChange={e => handleChange(index, 'escalateTo', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="mt-4">Save Workflow</Button>
    </div>
  );
}
