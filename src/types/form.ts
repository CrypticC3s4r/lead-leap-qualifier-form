
export type FormStep = {
  id: number;
  title: string;
  description?: string;
};

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  employmentStatus: string;
  employmentType: string;
  income: string;
  businessStage: string;
  offer: string;
  monthlyRevenue: string;
  biggestChallenge: string;
  investmentAmount: string;
  whyYou: string;
  readinessScale: number;
  termsAccepted: boolean;
};
