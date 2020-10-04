import React from 'react';

import { Nav } from '../../components';
import themeMain from '../../themes/assets/images/themeMain.png';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Nav />

      <section>
        <div>
          <h1>Project developed for currency conversion.</h1>

          <p>
            Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings
            elitis. Pra lá, depois sectionoltis porris, paradis. Paisis, filhis,
            espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in
            elementis mé pra quem é amistosis quis leo. Manduma pindureta quium
            dia nois paga. Sapien in monti palavris qui num significa nadis i
            pareci latim. Interessantiss quisso pudia ce receita de bolis, mais
            bolis eu num gostis.
          </p>
        </div>

        <img src={themeMain} alt="Coins" />
      </section>
    </Container>
  );
}
