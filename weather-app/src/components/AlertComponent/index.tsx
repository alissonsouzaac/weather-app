import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertComponentProps {
  text: string;
  onClose: () => void;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ text, onClose}) => {
  return (
    <div data-testid="alert-container">
      <Alert variant="filled" severity='error' style={{ marginTop: '20px' }}>
        {text}
     </Alert>
    </div>
  );
};

export default AlertComponent;
