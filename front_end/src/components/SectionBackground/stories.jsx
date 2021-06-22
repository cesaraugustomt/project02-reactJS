import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          esse, quis aliquam sunt porro, repellat soluta, accusamus corporis
          eligendi veniam a consequuntur! Corrupti, fugit nesciunt excepturi
          perspiciatis ex ipsam voluptatem.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
