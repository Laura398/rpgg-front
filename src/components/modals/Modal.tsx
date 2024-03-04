import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import DropZone from './DropZone';
import { Character } from '../../types/Character.type';

export default function BasicModal(props: { open: boolean; setOpen: (open: boolean) => void, generalInfos: Character, setGeneralInfos: (generalInfos: Character) => void}) {
    const { open, setOpen } = props;
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Modification de l'avatar du personnage
          </Typography>
          <DropZone open={props.open} setOpen={props.setOpen} generalInfos={props.generalInfos} setGeneralInfos={props.setGeneralInfos} />
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}