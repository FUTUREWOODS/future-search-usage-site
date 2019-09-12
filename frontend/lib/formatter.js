export const mailTemplateTitleFormtter = ({ id, title }) => {
  const { rendered } = title;
  return {
    title: rendered,
    id,
  };
}

export const mailTemplateFormatter = ({ id, title, acf }) => {
  const { rendered } = title;
  const { post_title, body, popups } = acf;
  const items = popups.map(popup => ({ post_title: popup.post_title, post_content: popup.post_content, id: popup.ID, visible: false }))
  return {
    id,
    title: rendered,
    postTitle: post_title,
    body,
    popups: items,
  };
}


export const searchCaseTitleFormatter = ({ id, title, acf }) => {
  const { rendered } = title;
  return {
    title: rendered,
    id,
    ...acf,
  };
}
