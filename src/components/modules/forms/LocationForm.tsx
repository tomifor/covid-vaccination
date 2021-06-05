import React, {FormEvent, useState} from 'react';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {municipalities, provinces} from '../../../data/places-data';
import {useRouter} from 'next/router';

const LocationForm = () => {
  const router = useRouter();
  const [province, setProvince] = useState<string>('');
  const [municipality, setMunicipality] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    router.push(`/province/${province}${municipality ? '/municipality/' + municipality : ''}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={'p-grid'}>
        <div className="p-field p-col-12 p-md-4">
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
        <div className="p-field p-col-12 p-md-4">
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
        <div className="p-field p-col-12 p-md-4 p-d-flex p-ai-end">
          <Button
            className="p-button-lg full-width"
            disabled={!province || submitting}
            label={'Siguiente'}
            loading={submitting}
            type={'submit'}
          />
        </div>
      </div>
    </form>
  );
};

export default LocationForm;
