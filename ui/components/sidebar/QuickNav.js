import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const QuickNav = props => {
  const forestHeader =
    <h4 className="hoverable" onClick={ () =>
      props.router.push(`/forests/${props.location.forestName}`)
    }>
      { props.location.forestName }
    </h4>;
  const treeHeader =
    <h4 className="hoverable" onClick={ () =>
      props.router.push(`/forests/${ props.location.forestName }/${ props.location.treeName }`)
    }>
      { props.location.treeName }
    </h4>;
  const branchHeader =
    <h4>
      { props.location.branchName }
    </h4>;

  let leafs = [];
  if(props.location.branchName) {
    for (let id in props.leafList) {
      if( props.leafList.hasOwnProperty( id ) ) {
        leafs.push(
          <p className="hoverable" key={ id }> { props.leafList[id].leafName } </p>
        )
      }
    }
  }

  let keyN = 0;
  return (
    <div id="quick-nav">
      {
        props.location.forestName ? (
          props.location.treeName ? (
            props.location.branchName ? (
              <div>
                { forestHeader }
                { treeHeader }
                { branchHeader }
                { leafs }
              </div>
            ) : (
              <div>
                { forestHeader }
                { treeHeader }
                <h4>BRANCHES</h4>
                { props.branchList.map(branch => {
                    keyN += 1;
                    return (
                      <p className="hoverable" key={ keyN }
                        onClick={ () =>
                          props.router.push(`/forests/${ props.location.forestName }/${ props.location.treeName }/${ branch.branchName }`)
                    }
                      > { branch.branchName } </p>
                    )
                }) }
              </div>
            )
          ) : (
            <div>
              { forestHeader }
              <h4>TREES</h4>
              { props.treeList.map(tree => {
                  keyN += 1;
                  return (
                    <p className="hoverable" key={ keyN }
                      onClick={ () =>
                        props.router.push(`/forests/${ props.location.forestName }/${ tree.name }`)
                    }
                    > { tree.name } </p>
                  )
              }) }
            </div>
          )
        ) : (
          <div>
            <h4>FORESTS</h4>
            { props.forestList.map(forest => {
                keyN += 1;
                return (
                  <p className="hoverable" key={ keyN }
                    onClick={ () =>
                    props.router.push(`/forests/${ forest.forestName }`)
                  }
                  > { forest.forestName } </p>
               )
            }) }
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  let { branchList,
        forestList,
        leafList,
        treeList } = state;
  return {
    branchList,
    forestList,
    leafList,
    treeList,
  }
}

const QuickNavContainer = connect(
  mapStateToProps,
)(QuickNav);

export default withRouter(QuickNavContainer);
