import { Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

export default function ContactForm() {
  return (
    <Form>
      <FormGroup>
        <Input />
      </FormGroup>

      <FormGroup>
        <Select />
      </FormGroup>
    </Form>
  );
}
