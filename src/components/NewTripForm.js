import { useState } from 'react';
import {
  Stepper,
  Button,
  Group,
  TextInput,
  Code,
  MultiSelect,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  form: {
    maxWidth: '40vw',
    width: '100%',
    height: '40vh',
  },
}));

const NewTripForm = () => {
  const [active, setActive] = useState(0);
  const [travelers, setTravelers] = useState([]);

  const classes = useStyles();

  const form = useForm({
    initialValues: {
      startCity: '',
      startState: '',
      endCity: '',
      endState: '',
      startDate: '',
      endDate: '',
      travelers: [],
    },
  });

  const nextStep = () => {
    setActive((current) => {
      return current < 3 ? current + 1 : current;
    });
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className='step-form'>
      <Stepper active={active} breakpoint='sm'>
        <Stepper.Step
          label='Starting Point'
          description='Where does your trip start?'
        >
          <TextInput
            label='City'
            placeholder='City'
            {...form.getInputProps('startCity')}
          />
          <TextInput
            mt='md'
            label='Start'
            placeholder='State'
            {...form.getInputProps('startState')}
          />
        </Stepper.Step>
        <Stepper.Step
          label='End Point'
          description='Where will your journey end?'
        >
          <TextInput
            label='City'
            placeholder='City'
            {...form.getInputProps('endCity')}
          />
          <TextInput
            label='State'
            placeholder='State'
            {...form.getInputProps('endState')}
          />
        </Stepper.Step>
        <Stepper.Step label='Dates'>
          <DateInput
            {...form.getInputProps('startDate')}
            label='Start Date'
            placeholder='Start Date'
          />
          <DateInput
            {...form.getInputProps('endDate')}
            label='End Date'
            placeholder='End Date'
          />
        </Stepper.Step>
        <Stepper.Step>
          <MultiSelect
            label='Add your travelers'
            data={travelers}
            placeholder='Select travelers'
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              const item = { value: query, label: query };
              setTravelers((current) => [...current, item]);
              return item;
            }}
          />
        </Stepper.Step>
      </Stepper>
      <Group position='right' mt='xl'>
        {active !== 0 && (
          <Button variant='default' onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 4 && <Button onClick={nextStep}>Next</Button>}
      </Group>
    </div>
  );
};

export default NewTripForm;
