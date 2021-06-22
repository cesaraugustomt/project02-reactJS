import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     At voluptates, assumenda, sequi non placeat voluptatem
     animi obcaecati consectetur rerum dolor nisi numquam eos.
     At delectus doloremque blanditiis mollitia nemo dolor?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
