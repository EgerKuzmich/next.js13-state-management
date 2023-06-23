import { FormField, FormFieldExtendedProps, Select, SelectExtendedProps } from 'grommet';

interface IInputGroupProps
  extends Omit<FormFieldExtendedProps, 'value' | 'ref' | 'options' | 'defaultValue'>,
    Omit<SelectExtendedProps, 'onSelect' | 'required' | 'size' | 'width' | 'children' | 'onChange' | 'disabled'> {}

const SelectGroup = (props: IInputGroupProps) => {
  const { onChange, value, icon, id, name, ref, options, defaultValue, ...fieldProps } = props;
  return (
    <FormField name={name} htmlFor={id} contentProps={{ border: 'bottom' }} {...fieldProps}>
      <Select
        id={id}
        name={name}
        defaultValue={defaultValue}
        icon={icon}
        value={value}
        options={options}
        onChange={onChange}
        ref={ref}
      />
    </FormField>
  );
};

export default SelectGroup;
