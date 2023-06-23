import { ReactNode, useCallback, useState } from 'react';
import { Tabs as TabController, Tab } from 'grommet';

export interface ITab {
  id: number;
  title: string;
  content: ReactNode;
}

export interface ITabProps {
  list: ITab[];
  onChange?: (index: number) => void;
}

const DEF_ACTIVE_TAB = 0;

const Tabs = ({ list, onChange, ...otherProps }: ITabProps) => {
  const [activeTab, setActiveTab] = useState(DEF_ACTIVE_TAB);

  const onChangeTab = useCallback(
    (index: number) => {
      setActiveTab(index);
      onChange?.(index);
    },
    [onChange],
  );

  if (!list.length) return null;

  return (
    <TabController activeIndex={activeTab} onActive={onChangeTab} {...otherProps}>
      {list.map(({ title, content, id }) => (
        <Tab title={title} key={id}>
          {content}
        </Tab>
      ))}
    </TabController>
  );
};

export default Tabs;
