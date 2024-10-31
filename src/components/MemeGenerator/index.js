import { useState } from 'react';
import { StyledButton, CustomItem } from './styledComponents';

const fontSizesOptionsList = [
  { optionId: '8', displayText: '8' },
  { optionId: '12', displayText: '12' },
  { optionId: '16', displayText: '16' },
  { optionId: '20', displayText: '20' },
  { optionId: '24', displayText: '24' },
  { optionId: '28', displayText: '28' },
  { optionId: '32', displayText: '32' },
];

const MemeGenerator = () => {
  const [formData, setFormData] = useState({
    url: '',
    topText: '',
    bottomText: '',
    fontSize: '8',
  });

  const onSubmitForm = event => {
    event.preventDefault();
    console.log('Submit', formData);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        columnGap: '124px',
      }}
    >
      <form onSubmit={onSubmitForm}>
        <h1 style={{ color: '#35469c' }}>Meme Generator</h1>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="url">Image URL</label>
          <input
            id="url"
            name="url"
            type="text"
            placeholder="Enter the image URL"
            value={formData.url}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="topText">Top Text</label>
          <input
            id="topText"
            name="topText"
            type="text"
            placeholder="Enter the top text"
            value={formData.topText}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            id="bottomText"
            name="bottomText"
            type="text"
            placeholder="Enter the bottom text"
            value={formData.bottomText}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="fontSize">Font Size</label>
          <select
            id="fontSize"
            name="fontSize"
            value={formData.fontSize}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            {fontSizesOptionsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
        </div>
        <div>
          <StyledButton type="submit" className="submit-button">
            Generate
          </StyledButton>
        </div>
      </form>
      <CustomItem
        data-testid="meme"
        url={formData.url}
        fontSize={formData.fontSize}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '10px',
          height: '300px',
          width: '300px',
          color: 'white',
        }}
      >
        <p style={{ fontSize: `${formData.fontSize}px` }}>{formData.topText}</p>
        <p style={{ fontSize: `${formData.fontSize}px` }}>{formData.bottomText}</p>
      </CustomItem>
    </div>
  );
};

export default MemeGenerator;
