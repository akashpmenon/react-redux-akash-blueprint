import { Link, Form, redirect, useSubmit, useNavigation, Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function Products() {
  const subimt = useSubmit();
  const navigation = useNavigation();
  const data = useLoaderData();
  const { header } = data;

  return (
    <>
      <button disabled={navigation.state === 'loading'} onClick={() => subimt(null, { method: 'delete' })}>Go Home2</button>
      <Suspense fallback={<p>Loading Test123..</p>}>
        <Await resolve={header}>
          {(header) => {
            return(
              <>
                <Form method='post'>
                  <h1>Test123 <Link to={'..'} relative={'path'}>Back</Link></h1>
                  <button>Go Home</button>
                </Form>  
              </>    
            )        
          }}
        </Await>  
      </Suspense>
    </>
  )
}

export function action() {
  console.log('entering...');
  return redirect('/root');
}

export default Products;