import { Drop, TextInput, TextInputProps } from 'grommet';
import { FormSearch } from 'grommet-icons';
import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

export interface ISearchInputProps extends TextInputProps {
  minLength?: number;
  tip?: string;
}

const DEF_MIN_LENGTH = 3;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  overflow: visible;
`;

const SearchInput = (props: ISearchInputProps) => {
  const [showTip, setShowTip] = useState(false);

  const { onChange, minLength = DEF_MIN_LENGTH, tip, ...restProps } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const isTipVisible = showTip && !!tip;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length < minLength) {
      setShowTip(true);
    }

    if (value.length >= minLength) {
      setShowTip(false);
    }

    onChange?.(event);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <TextInput icon={<FormSearch />} {...restProps} onChange={changeHandler} />
      {isTipVisible && (
        <Drop
          target={wrapperRef.current!}
          content={tip}
          margin={{ top: 'small' }}
          align={{ bottom: 'top' }}
          background={'light-3'}
          round="xsmall"
          pad="xsmall"
          onClickOutside={() => setShowTip(false)}
        >
          {tip}
        </Drop>
      )}
    </Wrapper>
  );
};

export default SearchInput;
