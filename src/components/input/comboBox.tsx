import React from 'react';

interface Props {
  type: string,
  name: string,
  placeholder?: string,
  label: string,
  optional: boolean,
  callBack: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => void,
  value?: string,
  options?: Array<{ label: string, value: string }>
}

class Combobox extends React.Component<Props, any> {

  handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    console.log(e.target.value);
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    console.log('Props: ', this.props); // Debugging line

    return (
      <div className={'m-2'}>
        <label htmlFor={this.props.name} className={'block'}>
          {this.props.label} {!this.props.optional ? <span className="text-red-600">*</span> : null}
        </label>
        {this.props.type === 'combobox' ? (
          <select
            id={this.props.name}
            className={'block border border-[#0fbcf9] outline-none focus:border-[#3c40c6] h-10 w-full'}
            onChange={e => this.props.callBack(e, this.props.name)}
            value={this.props.value}
          >
            {this.props.options?.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <input
            type={this.props.type}
            id={this.props.name}
            placeholder={this.props.placeholder}
            className={'block border border-[#0fbcf9] outline-none focus:border-[#3c40c6] h-10 w-full'}
            onChange={e => this.props.callBack(e, this.props.name)}
            value={this.props.value}
          />
        )}
      </div>
    );
  }
}

export default Combobox;
