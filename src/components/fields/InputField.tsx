import { useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps<any> {
  label: string
  placeholder?: string
  type?: string
  p?: string
}

const InputField = (props: Props) => {
  const {
    field,
    // fieldState
  } = useController(props)

  return (
    <div className="w-full">
      <label htmlFor="" className="font-normal">
        <div className="flex gap-2">
          <p className="">{props.p}</p>
          {props.label}
        </div>
      </label>
      <input
        {...field}
        type={props.type ?? 'text'}
        placeholder={props.placeholder}
        className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
      />
    </div>
  )
}

export default InputField
