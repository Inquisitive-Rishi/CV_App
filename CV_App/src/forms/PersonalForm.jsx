export default function PersonalForm({handleChange}) {

  return (
    <div>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <label htmlFor='fullName'>full name:<span className="text-red-600">*</span></label>
          <br />
          <input type='text' id='fullName' placeholder="Rishi Raj" name='full_name' onChange={handleChange}/>
          <br />
          <label htmlFor='email'>Email:</label>
          <br />
          <input type='email' id='email' placeholder="xyz@example.com" name='email' onChange={handleChange}/>
          <br />
          <label htmlFor='phone'>Phone:</label>
          <br />
          <input type='number' id='phone' placeholder="phone" name='phone' onChange={handleChange}/>
          <br />
          <label htmlFor='address'>Address:</label>
          <br />
          <input type='text' id='address' placeholder="Your Address" name='address' onChange={handleChange}/>
          <br />
          <label htmlFor='synopsis'>Synopsis:</label>
          <br />
          <input type='text' id='synopsis' placeholder="Software Engineer" name='synopsis' onChange={handleChange}/>
          <br />
        </fieldset>
      </form>
    </div>
  )
}
  