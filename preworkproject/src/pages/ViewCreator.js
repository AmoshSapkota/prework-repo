import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './client';
import card from './components/card';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  return (
    <div>
      {creator ? <card {...creator} /> : <p>Loading...</p>}
    </div>
  );
};

export default ViewCreator;
