<template>
  <page-header pageName="Market Place" />
  <section class="explore-section padding-top padding-bottom">
    <div class="container">
      <div class="section-header">
        <div class="nft-filter d-flex flex-wrap justify-content-center">
          <div class="form-floating">
            <select
              class="form-select"
              id="catSelect"
              aria-label="Floating label select example"
            >
              <option selected>All Category</option>
              <option value="1">Art</option>
              <option value="2">Music</option>
              <option value="3">Video</option>
              <option value="3">Digital Anime</option>
            </select>
            <label for="catSelect">Select a Category</label>
          </div>
          <div class="form-floating">
            <select
              class="form-select"
              id="sortSelect"
              aria-label="Floating label select example"
            >
              <option selected>Newest</option>
              <option value="1">Trending</option>
              <option value="2">Most Viewed</option>
              <option value="3">Less Viewed</option>
              <option value="3">Ending Soon</option>
              <option value="3">Recently Sold</option>
              <option value="3">Recently Created</option>
              <option value="3">Recently Viewed</option>
              <option value="3">Ending Soon</option>
            </select>
            <label for="sortSelect">Sort By</label>
          </div>
        </div>
        <div class="nft-search">
          <div class="form-floating nft-search-input">
            <input
              type="text"
              class="form-control"
              id="nftSearch"
              placeholder="Search NFT"
            />
            <label for="nftSearch">Search NFT</label>
            <button type="button"><i class="icofont-search-1"></i></button>
          </div>
        </div>
      </div>
      <div class="section-wrapper">
        <div class="explore-wrapper">
          <div class="row justify-content-center gx-4 gy-3">
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/04.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Gucci Lucas</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/02.gif"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">EUPHORIA de</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 230</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/01.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/01.gif"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/02.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Ecalo jers</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/01.jpg"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">Mewao com de</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 278</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/02.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/05.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/04.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Hola moc</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/06.gif"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">pet mice rio</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 340</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/06.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/05.gif"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Logicto pen</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/04.jpg"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">Logical Impact </a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 330</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/06.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/07.gif"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/09.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">unique lo</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part"><i class="icofont-flikr"></i></div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/03.jpg"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">Fly on high</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 355</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/05.gif"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Monica bel</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/04.gif"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">kiara rodri de</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 60</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/08.gif"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/01.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/11.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Gucci L.</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/05.jpg"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">EUPHORIA de</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 230</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/01.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/07.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/09.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">ptrax elm.</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/05.gif"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">Homies wall</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 930</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/06.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/05.gif"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Logicto pen</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/01.gif"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">Logical Impact </a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 330</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/02.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/05.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/04.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Hola moc</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/06.jpg"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">pet mice rio</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 340</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/01.png"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author">
                          <a href="author.html"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/01.gif"
                              alt="author-img"
                          /></a>
                        </li>
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/02.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Ecalo jers</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/03.gif"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">Mewao com de</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 278</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="nft-item">
                <div class="nft-inner">
                  <!-- nft top part -->
                  <div
                    class="
                      nft-item-top
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div class="author-part">
                      <ul class="author-list d-flex">
                        <li class="single-author d-flex align-items-center">
                          <a href="author.html" class="veryfied"
                            ><img
                              loading="lazy"
                              src="assets/images/seller/04.png"
                              alt="author-img"
                          /></a>
                          <h6><a href="author.html">Gucci Lucas</a></h6>
                        </li>
                      </ul>
                    </div>
                    <div class="more-part">
                      <div class="dropstart">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-offset="25,0"
                        >
                          <i class="icofont-flikr"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span>
                                <i class="icofont-warning"></i>
                              </span>
                              Report
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              ><span><i class="icofont-reply"></i></span>
                              Share</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nft-bottom part -->
                  <div class="nft-item-bottom">
                    <div class="nft-thumb">
                      <img
                        loading="lazy"
                        src="assets/images/nft-item/08.jpg"
                        alt="nft-img"
                      />

                      <!-- nft countdwon -->
                      <!-- <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                <li>
                                                    <span class="days">34</span><span class="count-txt">D</span>
                                                </li>
                                                <li>
                                                    <span class="hours">09</span><span class="count-txt">H</span>
                                                </li>
                                                <li>
                                                    <span class="minutes">32</span><span class="count-txt">M</span>
                                                </li>
                                                <li>
                                                    <span class="seconds">32</span><span class="count-txt">S</span>
                                                </li>
                                            </ul> -->
                    </div>
                    <div class="nft-content">
                      <h4><a href="item-details.html">EUPHORIA de</a></h4>
                      <div
                        class="
                          price-like
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <p class="nft-price">
                          Price: <span class="yellow-color">0.34 ETH</span>
                        </p>
                        <a href="#" class="nft-like"
                          ><i class="icofont-heart"></i> 230</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="load-btn mt-5">
            <a href="#" class="default-btn move-bottom">
              <span>Load More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PageHeader from "@/components/PageHeader";

export default {
  name: "MarketPlace",
  components: {
    PageHeader,
  },

};
</script>