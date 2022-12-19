/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Object Introspection',
  tagline: 'Dynamic C++ Object Profiling',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/object-introspection',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
	trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebookexperimental', // Usually your GitHub org/user name.
  projectName: 'object-introspection', // Usually your repo name.
	deploymentBranch: 'web',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebookexperimental/object-introspection',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'OI Logo',
          src: 'img/OIBrandmark.svg',
        },
        items: [
          // Please keep GitHub link to the right for consistency.
          {
						href: 'https://github.com/facebookexperimental/object-introspection',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#object-introspection:matrix.org',
              },
              {
                label: 'IRC',
                href: 'irc://irc.oftc.net/#object-introspection',
              },
            ],
          },
          {
            title: 'Code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://opensource.fb.com/legal/terms/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
