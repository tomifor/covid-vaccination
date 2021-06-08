import React, {FormEvent, useEffect, useState} from 'react';
import {Dialog} from 'primereact/dialog';
import Button from '../../elements/Button/Button';
import {Dropdown} from 'primereact/dropdown';
import {municipalities, provinces} from '../../../data/places-data';
import {Location} from '../../../models/location.model';

type Props = {
  visible: boolean;
  onClose(): void;
  onSubmit(location: Location): void;
};

const LocationFormModal: React.FC<Props> = ({visible, onClose, onSubmit}) => {
  const [province, setProvince] = useState<string>('');
  const [municipality, setMunicipality] = useState<string>('');

  useEffect(() => {
    setProvince('');
    setMunicipality('');
  }, [visible]);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      province: province,
      municipality: municipality ? municipality.toString() : undefined,
    });
  };

  const footer = (
    <div>
      <Button className={'p-button-text p-mr-5'} label="Cerrar" type={'button'} onClick={onClose} />
      <Button disabled={!province} label="Comparar" type={'button'} onClick={submitForm} />
    </div>
  );

  return (
    <Dialog
      footer={footer}
      header="Comparar"
      style={{maxWidth: '500px'}}
      visible={visible}
      onHide={() => onClose()}
    >
      <form onSubmit={submitForm}>
        <div className={'p-grid'}>
          <div className="p-field p-col-12">
            <label htmlFor="province">Provincia</label>
            <Dropdown
              className="p-inputtext-lg full-width"
              id={'province'}
              options={provinces}
              placeholder="Seleccione una provincia"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className="p-field p-col-12">
            <label htmlFor="province">Municipio/Departamento</label>
            <Dropdown
              filter
              className="p-inputtext-lg full-width"
              disabled={!province}
              filterBy={'label'}
              options={province ? municipalities[province] : []}
              placeholder="Opcional"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
            />
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default LocationFormModal;
