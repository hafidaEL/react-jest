
import React from 'react';
import Link from '../Link';
import renderer from 'react-test-renderer';


it('rendu correct du composant Link ', () => {
  const tree = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('rendu sans prop page ', () => {
  const tree = renderer.create(
    <Link>Facebook</Link>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});



/*
test('Le lien change de classe au hover', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}); */


