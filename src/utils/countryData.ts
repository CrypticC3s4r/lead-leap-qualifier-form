
type CountryOption = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
};

export const countries: CountryOption[] = [
  { code: 'de', name: 'Deutschland', dialCode: '+49', flag: '🇩🇪' },
  { code: 'at', name: 'Österreich', dialCode: '+43', flag: '🇦🇹' },
  { code: 'ch', name: 'Schweiz', dialCode: '+41', flag: '🇨🇭' },
  { code: 'fr', name: 'Frankreich', dialCode: '+33', flag: '🇫🇷' },
  { code: 'it', name: 'Italien', dialCode: '+39', flag: '🇮🇹' },
  { code: 'nl', name: 'Niederlande', dialCode: '+31', flag: '🇳🇱' },
  { code: 'be', name: 'Belgien', dialCode: '+32', flag: '🇧🇪' },
  { code: 'lu', name: 'Luxemburg', dialCode: '+352', flag: '🇱🇺' },
  { code: 'gb', name: 'Großbritannien', dialCode: '+44', flag: '🇬🇧' },
  { code: 'es', name: 'Spanien', dialCode: '+34', flag: '🇪🇸' },
  { code: 'pl', name: 'Polen', dialCode: '+48', flag: '🇵🇱' },
  { code: 'cz', name: 'Tschechien', dialCode: '+420', flag: '🇨🇿' },
  { code: 'dk', name: 'Dänemark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'se', name: 'Schweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'no', name: 'Norwegen', dialCode: '+47', flag: '🇳🇴' },
  { code: 'fi', name: 'Finnland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'us', name: 'USA', dialCode: '+1', flag: '🇺🇸' },
  { code: 'ca', name: 'Kanada', dialCode: '+1', flag: '🇨🇦' },
];

export const getDefaultCountry = (): CountryOption => {
  return countries.find(country => country.code === 'de') || countries[0];
};
