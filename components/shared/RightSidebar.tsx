import SuggestedCommunities from "../suggestions/SuggestedCommunities";
import SuggestedUser from "../suggestions/SuggestedUser";

function RightSidebar() {


  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
          Suggested Communities
        </h3>
        <SuggestedCommunities searchParams={{}} />
      </div>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
          Suggested Users
        </h3>
        <SuggestedUser searchParams={{}} />
      </div>

    </section>
  );
}

export default RightSidebar;