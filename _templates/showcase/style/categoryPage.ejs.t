---
to: website/src/pages/styles/<%= h.changeCase.param(category) %>.js
unless_exists: true
---
<% displayName = h.changeCase.pascal(name) + h.changeCase.pascal(category)%>import React from 'react';
import DemoPage from 'containers/Demo';
import { customComponents, DefaultComponent } from 'docs/styles/<%= category %>';

const <%= displayName %>Style = () => (
  <DemoPage
    title={'<%= h.changeCase.title(category) %>'}
    description={'A collection of <%= h.changeCase.title(category) %> components'}
    DemoComponentsProps={{
      noDefaultSection: true,
      customComponents,
      DefaultComponent,
    }}
    DemoSourceDrawerProps={{
      frameProps: {
        p: 2,
      },
    }}
  />
);

export default <%= displayName %>Style;
