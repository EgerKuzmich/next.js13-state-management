import { IFullIssue } from 'modules/Issue/types';
import { UiSidebarPage } from '../../Sidebar/ui/page';
import Issue from './Issue';
import { memo } from 'react';

interface ListProps {
  data?: IFullIssue[];
}

const IssuePageContent = ({ data }: ListProps) => {
  if (!data?.length) {
    return null;
  }

  return (
    <UiSidebarPage>
      <UiSidebarPage.List>
        {data.map((item) => {
          const { key: name, ...otherFieldProps } = item;

          return (
            <UiSidebarPage.List.Item key={item.id}>
              <Issue name={name} {...otherFieldProps} />
            </UiSidebarPage.List.Item>
          );
        })}
      </UiSidebarPage.List>
    </UiSidebarPage>
  );
};

export default memo(IssuePageContent);
