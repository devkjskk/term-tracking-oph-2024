export interface ILaw {
  id: string;
  name: string;
  state: string;
  presentedDate: string;
  rejectReason?: string;
  type: string;
  presentedBy: string;
  detail: string;
  directStakeholders: string;
  generalStakeholders: string;
  indirectlyInvolved: string;
  issuesForFeedback: string;
  rawDoc: string;
  supportingDocuments: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}
