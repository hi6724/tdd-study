import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType={'scoops'} />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each toppings option from server', async () => {
  render(<Options optionType={'toppings'} />);

  const images = await screen.findAllByRole('img', { name: /topping$/i });
  expect(images).toHaveLength(3);

  const altText = images.map((el) => el.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
