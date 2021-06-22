import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>&nbsp;<a href=//"https://beacons.page/cesaraugusto">Feito com ❤ por César Augusto</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
