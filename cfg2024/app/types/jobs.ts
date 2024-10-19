export interface OptionType {
  value: string;
  label: string;
}

export interface JobPostingFormData {
  title: string;
  description: string;
  salary: number;
  recruiter: string;
  skills: OptionType[];
  qualifications: OptionType;
  company: string;
}