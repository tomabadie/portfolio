const fonts = [
  {
    label: 'heading',
    className: 'font-heading',
  },
  {
    label: 'body',
    className: 'font-body',
  },
  {
    label: 'bis',
    className: 'font-alt',
  },
  {
    label: 'ter',
    className: 'font-bis',
  },
];

const weights = [
  { label: 'Thin', className: 'font-thin' },
  { label: 'ExtraLight', className: 'font-extralight' },
  { label: 'Light', className: 'font-light' },
  { label: 'Normal', className: 'font-normal' },
  { label: 'Medium', className: 'font-medium' },
  { label: 'Semibold', className: 'font-semibold' },
  { label: 'Bold', className: 'font-bold' },
  { label: 'Extrabold', className: 'font-extrabold' },
  { label: 'Black', className: 'font-black' },
];

const TypographyTest = () => {
  return (
    <div className="flex space-y-12 bg-gray-100 p-8 text-gray-900">
      {fonts.map((font) => (
        <div key={font.label}>
          <h2 className={`mb-4 text-3xl ${font.className}`}>{font.label}</h2>
          <div className="space-y-2">
            {weights.map((weight) => (
              <p key={weight.label} className={`text-lg ${font.className} ${weight.className}`}>
                {weight.label}: The quick brown fox jumps over the lazy dog.
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TypographyTest;
