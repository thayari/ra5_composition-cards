import React from 'react';
import Card from './Card';

function Column() {
  return (
    <div className="col-4">
      <Card imgUrl="https://picsum.photos/500/300">
          <h5 className="card-title">Британские ученые</h5>
          <p className="card-text">Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>
      </Card>
      <Card>
          <h4 className="card-title">Прототип нового сервиса</h4>
          <p className="card-text text-primary">С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.</p>
      </Card>
      <Card imgUrl="https://picsum.photos/500/200">
          <p className="card-text">С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.</p>
      </Card>
    </div>
  )
}

export default Column
