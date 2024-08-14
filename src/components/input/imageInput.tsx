import React from 'react';

interface Props {
  type: string,
  name: string,
  placeholder?: string,
  label: string,
  optional: boolean,
  callBack: Function,
  value?: string
}

class Imageinput extends React.Component<Props, any> {

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { type, callBack, name } = this.props;

    if (type === 'file') {
      const file = e.target.files ? e.target.files[0] : null;
      callBack(file, name);
    } else {
      callBack(e.target.value, name);
    }
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    const { type, name, placeholder, label, optional, value } = this.props;

    return(
      <div className={'m-2'}>
        <label htmlFor={name} className={'block'}>{label} {!optional ? <span className="text-red-600">*</span> : null}</label>
        <input
            type={type}
            id={name}
            placeholder={placeholder}
            className={'   h-10 w-full'}
            onChange={this.handleInput}
            value={type !== 'file' ? value : undefined}
            // for file input, value attribute should not be set
        />
      </div>
    );
  }
}

export default Imageinput;
