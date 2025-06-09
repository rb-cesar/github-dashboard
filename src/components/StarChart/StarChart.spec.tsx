export {};

// import { describe, it, expect } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { StarChartView } from './StarChart.view';

// // src/components/StarChart/StarChart.view.test.tsx

// describe('StarChartView', () => {
//   it('exibe mensagem quando não há dados', () => {
//     render(<StarChartView data={[]} />);
//     expect(screen.getByText('Nenhum dado de estrelas disponível.')).toBeInTheDocument();
//   });

//   it('exibe o título e os nomes dos repositórios quando há dados', () => {
//     const data = [
//       { name: 'repo1', stars: 10 },
//       { name: 'repo2', stars: 5 },
//     ];
//     render(<StarChartView data={data} />);
//     expect(screen.getByText('Repositórios com mais estrelas')).toBeInTheDocument();
//     expect(screen.getByText('repo1')).toBeInTheDocument();
//     expect(screen.getByText('repo2')).toBeInTheDocument();
//   });

//   it('renderiza o gráfico quando há dados', () => {
//     const data = [{ name: 'repo1', stars: 10 }];
//     render(<StarChartView data={data} />);
//     // O gráfico do recharts é um SVG
//     expect(document.querySelector('svg')).toBeTruthy();
//   });
// });
