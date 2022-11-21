import React from 'react'

const body = () => {
  return (
<>
<h3>Enter the text to analyze below</h3>
<textarea className='textarea'></textarea>
<div className='btn'><button>Convert to Uppercase</button>
<button>Convert to Lowercase</button>
<button>Clear Text</button>
<button>Copy Text</button>
<button>Remove Extra Spaces </button>
</div>



</>
  )
}

export default body