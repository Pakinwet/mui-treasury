import React from 'react';
import Box from '@material-ui/core/Box';
import { useJupiterNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/jupiter';
import NestedMenu from '@mui-treasury/components/menu/nested';

const JupiterNestedMenuStyle = () => {
  return (
    <Box minWidth={343}>
      <NestedMenu menus={getMenus()} useStyles={useJupiterNestedMenuStyles} />
    </Box>
  );
};
// hide-start
JupiterNestedMenuStyle.metadata = {
  title: 'Jupiter',
  path: 'nestedMenu/jupiter',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'nestedMenu/jupiter/jupiterNestedMenu.styles.js',
    },
  ],
};
// hide-end
const getMenus = () => [
  {
    key: 'intro',
    label: 'Introduction',
  },
  {
    key: 'quick start',
    label: 'Quick Start',
  },
  {
    key: 'recipes',
    label: 'Recipes',
  },
  {
    key: 'pluginLib',
    label: 'Plugin Library',
  },
  {
    key: 'starterLib',
    label: 'Starter Library',
  },
  {
    key: 'resources',
    label: 'Awesome Gatsby Resources',
  },
  {
    key: 'refGuides',
    label: 'Reference Guides',
    isToggleOutside: true,
    subMenus: [
      {
        key: 'preparingEnv',
        label: 'Preparing Your Environment',
        subMenus: [
          {
            key: 'browserSupport',
            label: 'Browser Support',
          },
          {
            key: 'gatsbyWindow',
            label: 'Gatsby on Windows',
          },
          {
            key: 'gatsbyLinux',
            label: 'Gatsby on Linux',
          },
        ],
      },
      {
        key: 'deployHosting',
        label: 'Deploying & Hosting',
        subMenus: [
          {
            key: 'preparing',
            label: 'Preparing a Site for Deployment',
          },
          {
            key: 'awsAmplify',
            label: 'Deploying to AWS Amplify',
          },
          {
            key: 'awsS3',
            label: 'Deploying to S3 and CloudFront',
          },
        ],
      },
      {
        key: 'customConfig',
        label: 'Custom Configuration',
        subMenus: [
          {
            key: 'babeljs',
            label: 'Customizing Babel.js Config',
          },
          {
            key: 'babelPluginMacro',
            label: 'Using Babel Plugin Macros',
          },
          {
            key: 'customWebpack',
            label: 'Adding a Custom Webpack Config',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];

export default JupiterNestedMenuStyle;
