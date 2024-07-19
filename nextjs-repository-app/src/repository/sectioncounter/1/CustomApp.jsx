import React from 'react';
import Example from './Example';

const CustomApp = () => {

  return (
    <>
     <div className="container mx-auto">
      <h1 className="text-3xl font-semibold text-center mt-8">Section Counter Example</h1>
      <Example />
      <section>
        <h2>Section 1</h2>
        <p>This is the content of section 1.</p>
      </section>
      <section>
        <h2>Section 2</h2>
        <p>This is the content of section 2.</p>
      </section>
      <section>
        <h2>Section 3</h2>
        <p>This is the content of section 2.</p>
      </section>
      <section>
        <h2>Section 4</h2>
        <p>This is the content of section 2.</p>
      </section>
      <section>
        <h2>Section 5</h2>
        <p>This is the content of section 2.</p>
      </section>
      {/* Add more sections as needed */}
    </div>
    </>
  )
}

export default CustomApp