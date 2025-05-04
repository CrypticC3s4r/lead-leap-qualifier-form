
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { FormValues } from '@/types/form';
import { getDefaultCountry } from '@/utils/countryData';

interface FormContextType {
  formValues: FormValues;
  updateFormValues: (values: Partial<FormValues>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  submitForm: () => Promise<void>;
}

const defaultFormValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryCode: getDefaultCountry().dialCode,
  employmentStatus: '',
  employmentType: '',
  income: '',
  businessStage: '',
  offer: '',
  monthlyRevenue: '',
  biggestChallenge: '',
  investmentAmount: '',
  whyYou: '',
  readinessScale: 5,
  termsAccepted: false,
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormValues = (values: Partial<FormValues>) => {
    setFormValues((prev) => ({ ...prev, ...values }));
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      // In a real application, you would send the data to a server
      console.log('Form submission data:', formValues);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form after submission
      setFormValues(defaultFormValues);
      setCurrentStep(1);
      
      return Promise.resolve();
    } catch (error) {
      console.error('Error submitting form:', error);
      return Promise.reject(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        updateFormValues,
        currentStep,
        setCurrentStep,
        isSubmitting,
        setIsSubmitting,
        submitForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
