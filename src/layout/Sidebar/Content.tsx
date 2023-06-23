import { NAVIGATION_LIST } from '../LayerNavigationPage/constants';
import { UiSidebar } from './ui';
import { Fragment, SyntheticEvent, memo, useCallback } from 'react';
import LayerNavigationPage from 'layout/LayerNavigationPage';
import SidebarSlideOver from './SlideOver';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from 'layout/LayoutProvider';

const LayoutSidebarContent = () => {
  const { page, onSetPage } = useLayoutContext();

  const navigate = useNavigate();

  const onTogglePageVisibility = useCallback(
    (value: string) => {
      const result = value === page ? '' : value;
      onSetPage(result);
    },
    [page, onSetPage],
  );

  return (
    <UiSidebar.List>
      {NAVIGATION_LIST.map(({ id, name, icon: Icon, href }) => {
        const active = page === id;

        const onChange = href
          ? () => {
              navigate(href);
              onSetPage('');
            }
          : () => onTogglePageVisibility(id);

        const clickHandler = (e: SyntheticEvent) => {
          e.preventDefault();
          onChange();
        };

        return (
          <Fragment key={id}>
            <UiSidebar.List.Item>
              <UiSidebar.Button to={id} key={name} $active={active} onClick={clickHandler}>
                <UiSidebar.Button.Icon>
                  <Icon />
                </UiSidebar.Button.Icon>

                {name}
              </UiSidebar.Button>
            </UiSidebar.List.Item>

            {active && <SidebarSlideOver>{!href && <LayerNavigationPage page={page} />}</SidebarSlideOver>}
          </Fragment>
        );
      })}
    </UiSidebar.List>
  );
};

export default memo(LayoutSidebarContent);
