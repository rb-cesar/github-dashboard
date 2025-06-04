import React from 'react';
import { Box, Text } from 'grommet';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface Props {
  data: { name: string; stars: number }[];
}

export const StarChartView: React.FC<Props> = ({ data }) => {
  if (!data.length) return <Text style={{ padding: 'medium' }}>Nenhum dado de estrelas disponível.</Text>;

  return (
    <Box pad="medium" height="400px">
      <Text weight="bold" size="large" margin={{ bottom: 'small' }}>
        Repositórios com mais estrelas
      </Text>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stars" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
